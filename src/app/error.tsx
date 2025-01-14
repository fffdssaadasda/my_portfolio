"use client"
import ErrorPage from "@/components/ErrorPage"
const error = ({ error, }: { error: Error & { digest?: string } }) => {
  return (
    // <ErrorPage message={error.message} statusCode={401} />
    <>
     <div className="text-red-500 text-center font-bold max-sm:text-[22px] text-[3vw]">
            سيتم  حل المشكله قريبا 
        </div>
    </>
  )
}

export default error
