import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-light tracking-tighter">
        <b className='font-extrabold'>Hi,</b> I'm Muhammad <b className='font-extrabold'>Reza</b> Elang Erlangga.
      </h1>
      <p className="mb-4">
        Software Engineer with
        {" "}<b>
          5+ years of professional experience
        </b>{" "}
        in full-cycle development across frontend and backend systems, Began career as a frontend developer in 2019, with increasing specialization in backend engineering since 2021.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
