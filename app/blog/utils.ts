import fs from 'fs'
import path from 'path'

export type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string[]
  active: boolean
  showOnList: boolean
}

export type Post = {
  metadata: Metadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    if (key === 'tags') {
      metadata[key.trim()] = value.split(',').map((tag) => tag.trim())
    } else if (key === 'active') {
      metadata[key.trim()] = value === 'true'
    } else if (key === 'showOnList') {
      metadata[key.trim()] = value === 'false'
    } else {
      metadata[key.trim()] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.filter((file) => {
    let { metadata } = readMDXFile(path.join(dir, file))
    return metadata.active
  }).map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts(tags?: string[]) {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts')).filter((post) => {
    if (!tags) {
      return true
    }
    return tags.some((tag) => post.metadata.tags?.includes(tag))
  })
}


function getMDXTags(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.filter((file) => {
    let { metadata } = readMDXFile(path.join(dir, file))

    console.log(metadata.showOnList !== undefined)
    if (metadata.showOnList !== undefined && metadata.showOnList === true) {
      return false
    }

    return metadata.active || []
  }).map((file) => {
    let { metadata } = readMDXFile(path.join(dir, file))
    return metadata.tags || []
  })
}

export function getBlogPostTags(): string[] {
  let tags = getMDXTags(path.join(process.cwd(), 'app', 'blog', 'posts')).flat()
  let tagsMap = new Map<string, boolean>()
  tags.forEach((tag) => {
    tagsMap.set(tag, true)
  })

  return Array.from(tagsMap.keys()).sort()
}


