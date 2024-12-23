import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ButtonSSO } from "../ButtonSSO/ButtonSSO";

export function SignInCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Efetue o login para entrar na plataforma</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <ButtonSSO />
      </CardContent>
    </Card>
  )
}