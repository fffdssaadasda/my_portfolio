"use client"
import ErrorPage from "@/components/ErrorPage"
const error = ({ error, }: { error: Error & { digest?: string } }) => {
    return (
        <ErrorPage message={error.message} statusCode={401} />
    )
}

export default error