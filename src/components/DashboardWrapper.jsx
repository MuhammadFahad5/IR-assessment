import React from 'react'

const DashboardWrapper = ({ children }) => {
    return (
        <section className=' '>
            <div className='flex flex-wrap w-full bg-[#FAFAFA] min-h-[100vh] rounded-2xl'>
                <aside className='hidden lg:block lg:w-[250px] bg-[#396F7E] rounded-2xl'>

                </aside>
                <main className='w-full lg:w-[calc(100%-250px)] px-4'>
                    {children}
                </main>
            </div>

        </section>
    )
}

export default DashboardWrapper