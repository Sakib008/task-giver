

 const sendingMessageTemplate = ({ otp, username }) => {
  return `
    <Html lang='en' dir='ltr'>
      <Head>
        <title>
          <Font fontFamily='Roboto' fallbackFontFamily={'Verdana'} webFont={{
              url : 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap',
              format : 'woff2'
          }} 
          fontWeight={400}
          fontStyle='normal'
          />
        </title>
      </Head>
      <Preview>
        Here's your Verification Code : ${otp}
      </Preview>
      <Section>
        <Row>
          <Heading as='h2'>Hello ${username}</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering. Please use the following Verification code to complete your registration : 
          </Text>
        </Row>
        <Row>
          <Text>${otp}</Text>
        </Row>
        <Row>
          <Text>
            If you didn't request this code,please ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  `;
};

module.exports = { sendingMessageTemplate };