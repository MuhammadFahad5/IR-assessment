import React, { useState } from "react";
import assign_img from '../assets/dashboard/profile-add.svg'
import check from '../assets/dashboard/check.svg'
import cross from '../assets/dashboard/cross.svg'
import redo from '../assets/dashboard/redo.svg'

const Card1 = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const companyDetails = [
    {
      id: '1',
      heading: 'Company Name (En)',
      title: 'Lorem Ipsum',
    },
    {
      id: '2',
      heading: 'Company Name (Ar)',
      title: 'اختبار اسم الشركة',
    },
    {
      id: '3',
      heading: 'Company Type',
      title: 'Lorem Ipsum',
    },

    {
      id: '4',
      heading: 'Trade License Number',
      title: 'CN-1000770',
    },
    {
      id: '5',
      heading: 'License Issue Date',
      title: '01-05-2023',
    },
    {
      id: '6',
      heading: 'License Expiry Date',
      title: '01-05-2025',
    },
  ]

   const contactPerson = [
    {
      id: '1',
      heading: 'Contact Person Name',
      title: 'John Doe',
    },
    {
      id: '2',
      heading: 'Email',
      title: 'johndoe@yopmail.com',
    },
    {
      id: '3',
      heading: 'Mobile',
      title: '123456789',
    },

    {
      id: '4',
      heading: 'Phone',
      title: '123456789',
    },
    
    
  ]
  return (
    <section className='rounded-2xl dashboard-card-shadow bg-white p-4'>
      <div className='flex gap-3 flex-wrap justify-between mt-5'>
        <div>
          <h1 className='text-[#414042] text-[26px] font-semibold'>Lorem Ipsum Request</h1>
          <p className='text-[#8D8C8E] font-semibold text-[14px] mt-2 mb-4'>Application no# 1122545266455</p>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <div>
            <button className='flex items-center gap-[4px] bg-[#396F7E] py-[10px] px-4 rounded-xl text-[14px] font-bold text-[#fff]'> <img src={assign_img} alt="banner" className='w-[18px]' /> <span>Assign</span></button>
          </div>
          <div>
            <button className='flex items-center gap-[4px] bg-[#DEFFEE] py-[10px] px-4 rounded-xl text-[14px] font-bold text-[#66CB9F]'><img src={check} alt="banner" className='w-[18px]' /><span>Approve</span></button>
          </div>
          <div>
            <button className='flex items-center gap-[4px] bg-[#FCDEDF] py-[10px] px-4 rounded-xl text-[14px] font-bold text-[#D73F42]'><img src={cross} alt="banner" className='w-[18px]' /><span>Reject</span></button>
          </div>
          <div>
            <button className='flex items-center gap-[4px] bg-[#DCEBEF] py-[10px] px-4 rounded-xl text-[14px] font-bold text-[#396F7E]'><img src={redo} alt="banner" className='w-[18px]' /><span>Return for modification</span></button>
          </div>

        </div>
      </div>
      <hr className='my-6' />

      <div className="w-full ">
        {/* Tab Headers */}
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`pb-3 ${activeTab === "tab1"
              ? "text-[#396F7E] border-b-2 border-[#396F7E] font-bold"
              : " text-[#59595B] font-semibold"
              } `}
          >
            Company Details
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`pb-3 ${activeTab === "tab2"
              ? "text-[#396F7E] border-b-2 border-[#396F7E] font-bold"
              : " text-[#59595B] font-semibold"
              } `}
          >
            Company Profile
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "tab1" &&
            <div>
              <div className="flex flex-wrap">
                {
                  companyDetails.map((item) => (
                    <div key={item.id} className="w-full sm:w-1/2 xl:w-1/3 p-3">
                      <h3 className="text-[#414042] text-[14px] font-normal">{item.heading}</h3>
                      <h4 className="text-[#414042] text-[14px] font-bold">{item.title}</h4>
                    </div>
                  ))
                }
              </div>
            </div>}

          {activeTab === "tab2" && <div>Company profile content content.</div>}
        </div>

         <hr className='my-6' />
         <h2 className="text-[#8D8C8E] text-[16px] font-bold px-3">Contact Person</h2>
         <div className="flex flex-wrap">
                {
                  contactPerson.map((item) => (
                    <div key={item.id} className="w-full sm:w-1/2 xl:w-1/4 p-3">
                      <h3 className="text-[#414042] text-[14px] font-normal">{item.heading}</h3>
                      <h4 className="text-[#414042] text-[14px] font-bold">{item.title}</h4>
                    </div>
                  ))
                }
              </div>

      </div>


    </section>
  )
}

export default Card1