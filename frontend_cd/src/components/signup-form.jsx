// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import Link from "next/link";
// import { FaGithub } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import { TriangleAlert } from "lucide-react";

// const SignUp = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState(null);

//   return (
//     <div className="h-full flex items-center justify-center bg-[#1b0918]">
//       <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
//         <CardHeader>
//           <CardTitle className="text-center">Sign up</CardTitle>
//           <CardDescription className="text-sm text-center text-accent-foreground">
//             Use email or service to create an account
//           </CardDescription>
//         </CardHeader>
//         {!!error && (
//           <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
//             <TriangleAlert />
//             <p>{error}</p>
//           </div>
//         )}
//         <CardContent className="px-2 sm:px-6">
//           <form className="space-y-3">
//             <Input
//               type="text"
//               placeholder="Full name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//             <Input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Confirm password"
//               value={form.confirmPassword}
//               onChange={(e) =>
//                 setForm({ ...form, confirmPassword: e.target.value })
//               }
//               required
//             />
//             <Button className="w-full" size="lg">
//               Continue
//             </Button>
//           </form>

//           <Separator />
//           <div className="flex my-2 justify-evenly mx-auto items-center">
//             <Button
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FcGoogle className="size-8 left-2.5 top-2.5" />
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
//             >
//               <FaGithub className="size-8 left-2.5 top-2.5" />
//             </Button>
//           </div>
//           <p className="text-center text-sm mt-2 text-muted-foreground">
//             Already have an account?
//             <Link
//               className="text-sky-700 ml-4 hover:underline cursor-pointer"
//               href="sign-in"
//             >
//               Sign in
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SignUp;