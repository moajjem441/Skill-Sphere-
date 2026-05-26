"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="btn btn-primary"
        >
            Back
        </button>
    );
};

export default BackButton;