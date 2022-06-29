import ContactForm from './ContactForm'
import SectionTitle from './SectionTitle'
import SocialMedia from './SocialMedia'

const Contact = ({ contactInfo }) => {
  const [cell, email] = contactInfo
  return (
    <section className="py-[100px]" id="contact">
      <div className="container">
        <SectionTitle title="Get In Touch"  />

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-5">
            <div className="space-y-2 font-medium">
              <p>
                <b>Email:</b> {email.url}
              </p>
              <p>
                <b>Cell:</b> {cell.url}
              </p>
            </div>

            <SocialMedia className="mt-6 md:mt-10" />
          </div>

          <div className="col-span-7 mt-10 md:mt-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
