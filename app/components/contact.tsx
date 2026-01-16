"use client"

import { MinusIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Contact({ contact: { name, description, link, copyLink } }) {

    const [isCopied, setIsCopied] = useState(false)

    const copyAction = async () => {
        try {
            if (copyLink !== "") {
                await navigator.clipboard.writeText(copyLink)
            } else {
                await navigator.clipboard.writeText(link)
            }
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between'  >
            <Link href={`${link}`} rel="noopener noreferrer" target="_blank">
                <p className="hover:underline md:text-left text-center">
                    <span className="text-neutral-900 dark:text-neutral-100">
                        {name}
                    </span>
                    {" "}  <MinusIcon size={24} className='inline text-gray-500' />
                    {" "}
                    <span className="text-neutral-500 dark:text-neutral-500">
                        {description}
                    </span>
                    {name === "email" &&
                        <span className=" font-extrabold text-neutral-900 dark:text-neutral-100 ">
                            {" "} ( mrezaelange@gmail.com )
                        </span>}
                </p>
            </Link>
            <div className="flex items-center justify-center">
                {isCopied ?
                    <button className="cursor-not-allowed py-2 px-4 w-auto border rounded-md border-neutral-500" disabled> {name} link copied!</button> :
                    <button className="cursor-pointer py-2 px-4 w-auto border rounded-md border-neutral-500" onClick={copyAction}>
                        Copy {name} link
                    </button>
                }
            </div>
        </div>
    )
}