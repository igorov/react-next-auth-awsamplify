import { Flex, Button, Heading, useAuthenticator } from "@aws-amplify/ui-react";

export default function Home() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
      <Heading level={1}>Hello world</Heading>
      <Button onClick={signOut} variation="primary">Logout</Button>
    </Flex>
    
  );
}
