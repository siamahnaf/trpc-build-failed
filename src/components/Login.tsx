"use client"
import { useRouter } from "next/navigation";
import { signIn } from "@/auth/actions";

const Login = () => {
    const router = useRouter();
    const onLogin = async () => {
        const { error } = await signIn({
            email: "info@wedogretings.co.uk",
            password: "byron30"
        });
        console.log(error);
        router.push("/")
    }

    return (
        <div>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default Login;