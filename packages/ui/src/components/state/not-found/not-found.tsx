'use client';

import { useRouter } from "next/navigation";
import { buttonStyles } from "../../button/button.css";
import { cn } from '../../../lib/utils'

type NotFoundProps = {
  statusCode?: number,
  title?: string;
  description?: string;
};

const NotFound: React.FC<NotFoundProps> = ({
  statusCode = 404,
  title = "",
  description = "",
}
) => {
  const router = useRouter();
  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold">{statusCode}</h1>
      <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
      <p className="mt-2">{description}</p>
      <button
        className={cn("mt-4", buttonStyles({ variant: "default" }))}
        onClick={() => router.push("/")}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;

