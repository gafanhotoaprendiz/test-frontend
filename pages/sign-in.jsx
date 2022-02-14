import * as S from "styles"
import { Form } from "styles/Form"
import { Button } from "styles/Form/Button"
import { Input } from "styles/Form/Input"
import { Title } from "styles/Form/Title"

export default function SignIn() {
    return (
        <S.Main>
            <Form width="35%" height="50%" gap="10%">
                <S.LockIcon />
                <Title>Sign In</Title>
                <Input type="text" placeholder="Enter username or email:" />
                <Input type="text" placeholder="Enter password:" />
                <p></p>
                <Button type="submit" variant="contained">Sign In</Button>

                <style jsx>{`
                    p {
                        color: ${({ theme }) => theme.colors.primary}
                    }
                `}</style>
            </Form>
        </S.Main>
    )
}
