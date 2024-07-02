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
    <Html lang="en">
      <Head>
        <title>Portfolio Contact Form</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="x-apple-disable-message-reformatting" />
      </Head>
      <Body>
        <Container width={600}>
          <Section>
            <Text>Portfolio Contact Form</Text>
            <Hr />
            <Text>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Mobile:</strong> {mobile}
            </Text>
            <Text>
              <strong>Message:</strong> {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  </div>
);

export default ReceiveMail;
