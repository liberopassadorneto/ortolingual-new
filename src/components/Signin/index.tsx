import {
  Container,
  Form,
  FormBtn,
  FormContent,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  Icon,
  Text,
} from './SigninElements';

export function Signin() {
  return (
    <Container>
      <FormWrapper>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <FormHeading>Sign in to your account</FormHeading>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormBtn type='submit'>Continue</FormBtn>
            <Text>Forgot password?</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  );
}
