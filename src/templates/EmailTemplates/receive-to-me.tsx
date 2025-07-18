import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface ReceiveMailProps {
  fullName: string;
  email: string;
  mobile: string;
  message: string;
}

export const ReceiveMail: React.FC<Readonly<ReceiveMailProps>> = ({
  fullName,
  email,
  mobile,
  message,
}) => (
  <div>
    <Html lang='en'>
      <Head>
        <title>Portfolio Contact Form</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width'
        />
        <meta
          httpEquiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta name='x-apple-disable-message-reformatting' />
      </Head>
      <Body>
        <Container width={600}>
          <Section>
            <Text>New Message from {fullName}</Text>
            <Hr />
            <Text>
              <b>Full Name:</b> {fullName}
            </Text>
            <Text>
              <b>Email:</b> {email}
            </Text>
            <Text>
              <b>Mobile:</b> {mobile}
            </Text>
            <Text>
              <b>Message:</b> {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </div>
);

export default ReceiveMail;
