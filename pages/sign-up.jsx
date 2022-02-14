import * as S from "styles"
import { Form } from "styles/Form"
import { Button } from "styles/Form/Button"
import { Input } from "styles/Form/Input"
import { Title } from "styles/Form/Title"

export default function SignUp() {
    return (
        <S.Main>
            <Form width="35%" height="70%" gap="7%">
                <S.LockIcon />
                <Title>Sign Up</Title>
				<Input type="text" placeholder="Enter name:"/>
				<Input type="password" placeholder="Enter surname:"/>
                <Input type="text" placeholder="Enter e-mail:" />
                <Input type="text" placeholder="Enter password:" />
                <Button type="submit" variant="contained">Sign In</Button>
            </Form>
        </S.Main>
    )
}
