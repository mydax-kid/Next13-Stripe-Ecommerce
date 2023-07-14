import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="grid place-items-center h-[500px]">
            Yaaay!! You've successfully made your purchase!
            <Link href={'/'} className="text-blue-700 hover:text-blue-300">Back home </Link>
        </div>
    )
}