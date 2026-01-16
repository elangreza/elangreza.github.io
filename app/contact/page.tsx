
import { Contact } from 'app/components/contact'
import { baseUrl } from 'app/url'

export const metadata = {
    title: 'Contacts',
    description: 'Read my Contacts.',
    openGraph: {
        title: 'contacts',
        description: 'Read my Contacts.',
        type: 'website',
        url: `${baseUrl}/contacts`,
        siteName: 'Elang Reza',
        locale: 'en_US',
        images: [
            {
                url: `${baseUrl}/contacts/opengraph-image`,
                width: 1200,
                height: 630,
                alt: 'Elang Reza',
            },
        ],
    },
}

export default function Page() {
    let contacts = [
        { name: "email", description: "contact me via email", link: "mailto:mrezaelange@gmail.com?subject=Inquiry&body=Hi Reza,", copyLink: "mrezaelange@gmail.com" },
        { name: "linkedin", description: "see my profile on linkedIn", link: "https://id.linkedin.com/in/muhammad-reza-elang-erlangga-1b836715b", copyLink: "" },
        { name: "github", description: "see my github profile and project", link: "https://github.com/elangreza", copyLink: "" },
    ]
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Contacts</h1>
            <div className="grid grid-cols-1 gap-6 text-sm">
                {contacts.map((contact, index) => (
                    <Contact key={index} contact={contact} />
                ))}
            </div>
        </section>
    )
}


