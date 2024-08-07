'use client'



import React, { use, useState } from 'react'
import { H1, H3, H5, P } from '../global/Typography'
import Divider from '../global/Divider'
import Link from 'next/link'
import Input from '../global/Input'
import { PrimaryButton } from '../global/Buttons'
import axios from "axios"


const defaultValues = {
	name: '',
	email: '',
	phone: '',
	subject: '',
	message: '',
}

const MainSection = () => {
	const [formData, setFormData] = useState(defaultValues)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')


	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setError('')
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (Object.values(formData).includes("")) {
      setError("Please fill in all fields. All fields are required");
      return;
    }

    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const name = formData.name.split(" ");

    const response = await axios.post(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        portalId,
        formGuid,
        fields: [
          {
            name: "firstname",
            value: name[0],
          },
          {
            name: "email",
            value: formData.email,
          },
          {
            name: "lastname",
            value: name[1],
          },
          {
            name: "message",
            value: `${formData.subject}: ${formData.message}`,
          },
        ],
      },
      config,
    );
    response;
    if (response.status === 200) {
      setFormData(defaultValues);
      setSuccess(
        response.data?.inlineMessage || "Thank you for contacting us!",
      );
    } else {
      setError(response.data?.message || "An error occurred, please try again");
    }
  };

  return (
    <section className="px-6">
      <div className="container mx-auto grid grid-cols-1 justify-between gap-20 pt-14 lg:grid-cols-2">
        <div className="text-center lg:w-11/12 lg:text-left">
          <H1>
            Contact <span className="text-primaryGreen">us</span>
          </H1>
          <Divider height={24} />

          <P>
            Are you a lending provider or a software platform looking to extend
            funding to your business customers? Let&apos;s connect and see how
            we can add value where it counts
          </P>

          <Divider height={48} />
          <div className="mx-auto w-fit items-center gap-8 lg:mx-0 lg:flex">
            <div className="mx-auto w-fit lg:mx-0">
              <svg
                width="29"
                height="24"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.2572 0.148438H3.9239C2.2875 0.148437 0.960938 1.47981 0.960938 3.12215V5.50112C0.960897 5.71877 1.07932 5.91905 1.26968 6.0233L14.3067 13.1602C14.4836 13.2571 14.6975 13.2571 14.8744 13.1602L27.9115 6.0233C28.1018 5.91905 28.2202 5.71877 28.2202 5.50112V3.12215C28.2202 1.47981 26.8936 0.148438 25.2572 0.148438Z"
                  fill="#011D7B"
                />
                <path
                  d="M15.4421 14.649C14.912 14.9338 14.2715 14.9338 13.7414 14.649L0.974567 7.78125L0.960938 7.79002V20.1237C0.960938 21.7379 2.2875 23.0464 3.9239 23.0464H25.2572C26.8936 23.0464 28.2202 21.7379 28.2202 20.1237V7.79002L28.2066 7.78183L15.4421 14.649Z"
                  fill="#011D7B"
                />
              </svg>
            </div>
            <div className="">
              <P>Email us</P>
              <Divider height={4} />
              <Link href="mailto:hello@fumiwo.io">
                <H5 className="text-textHeader">hello@fumiwo.io</H5>
              </Link>
            </div>
          </div>

          <Divider height={48} />

          <div>
            <P className="inline text-textHeader">
              {/* <svg className='inline' width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1H33" stroke="#011456" stroke-width="2" stroke-linecap="round" />
							</svg> */}
              Connect with us:
            </P>
          </div>
          <Divider height={16} />

          <div className="mx-auto flex w-fit gap-5 lg:mx-0">
            <Link href="https://x.com/fumiwoio">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="5" fill="#0BE781" />
                <g clip-path="url(#clip0_1141_4864)">
                  <path
                    d="M32 15.7988C31.2563 16.125 30.4637 16.3412 29.6375 16.4462C30.4875 15.9388 31.1363 15.1412 31.4412 14.18C30.6488 14.6525 29.7738 14.9863 28.8412 15.1725C28.0887 14.3713 27.0162 13.875 25.8462 13.875C23.5763 13.875 21.7487 15.7175 21.7487 17.9763C21.7487 18.3012 21.7762 18.6137 21.8438 18.9112C18.435 18.745 15.4188 17.1113 13.3925 14.6225C13.0387 15.2363 12.8313 15.9388 12.8313 16.695C12.8313 18.115 13.5625 19.3737 14.6525 20.1025C13.9937 20.09 13.3475 19.8988 12.8 19.5975C12.8 19.61 12.8 19.6262 12.8 19.6425C12.8 21.635 14.2212 23.29 16.085 23.6712C15.7512 23.7625 15.3875 23.8062 15.01 23.8062C14.7475 23.8062 14.4825 23.7913 14.2337 23.7362C14.765 25.36 16.2725 26.5538 18.065 26.5925C16.67 27.6838 14.8988 28.3412 12.9813 28.3412C12.645 28.3412 12.3225 28.3263 12 28.285C13.8162 29.4563 15.9688 30.125 18.29 30.125C25.835 30.125 29.96 23.875 29.96 18.4575C29.96 18.2762 29.9538 18.1013 29.945 17.9275C30.7588 17.35 31.4425 16.6288 32 15.7988Z"
                    fill="#011D7B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1141_4864">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/fumiwo/">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="5" fill="#0BE781" />
                <g clip-path="url(#clip0_1141_4865)">
                  <path
                    d="M31.9951 32.0008V32H32.0001V24.665C32.0001 21.0767 31.2276 18.3125 27.0326 18.3125C25.0159 18.3125 23.6626 19.4192 23.1101 20.4683H23.0517V18.6475H19.0742V32H23.2159V25.3883C23.2159 23.6475 23.5459 21.9642 25.7017 21.9642C27.8259 21.9642 27.8576 23.9508 27.8576 25.5V32.0008H31.9951Z"
                    fill="#011456"
                  />
                  <path
                    d="M12.3281 18.6484H16.4748V32.0009H12.3281V18.6484Z"
                    fill="#011456"
                  />
                  <path
                    d="M14.4017 12C13.0758 12 12 13.0758 12 14.4017C12 15.7275 13.0758 16.8258 14.4017 16.8258C15.7275 16.8258 16.8033 15.7275 16.8033 14.4017C16.8025 13.0758 15.7267 12 14.4017 12V12Z"
                    fill="#011456"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1141_4865">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(12 12)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-[648px rounded-3xl bg-white p-12 shadow-formShadow">
          <div>
            <H5>Request a demo — let&apos;s work together.</H5>

            <Divider height={24} />

            <P>
              Let&apos;s help you change the way you make credit decisions.
              Let&apos;s talk!
            </P>

            <Divider height={16} />
            <form onSubmit={submitHandler}>
              <div className="gap-4 lg:flex">
                <Input
                  required
                  name="name"
                  label="Name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={onChangeValue}
                />
                <Divider height={16} className="lg:hidden" />
                <Input
                  required
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={onChangeValue}
                />
              </div>
              <Divider height={16} />

              <Input
                required
                name="phone"
                label="Phone"
                placeholder="Phone number"
                value={formData.phone}
                minLength={11}
                onChange={(e) => {
                  if (isNaN(Number(e.target.value))) return;

                  onChangeValue(e);
                }}
              />
              <Divider height={16} />

              <Input
                required
                name="subject"
                label="Subjects"
                placeholder="What is it about?"
                value={formData.subject}
                onChange={onChangeValue}
              />
              <Divider height={16} />

              <Input
                required
                label="Message"
                textareaProps={{
                  name: "message",
                  value: formData.message,
                  onChange: onChangeValue,
                  rows: 4,
                  placeholder: "Tell us about your project...",
                }}
              />

              <p
                className={`mt-2 text-xs ${error ? `text-red-500` : `text-green-500`}`}
              >
                {error || success}
              </p>

              <Divider height={16} />

              <PrimaryButton className="mx-auto block lg:inline">
                Submit
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection