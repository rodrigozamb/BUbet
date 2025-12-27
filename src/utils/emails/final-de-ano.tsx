import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BUBETbalidationProps {
  verificationLink: string;
}

const baseUrl = "https://bubet-bucket.s3.sa-east-1.amazonaws.com/utils/BUlogo2.png"

export default function FinalDeAnoEmail() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>BUBet - A temporada 2025 chegou ao fim</Preview>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={imageSection}>
                <Img
                  src={`${baseUrl}`}
                  width="150"
                  height="90"
                  alt="bubet's Logo"
                />
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Gostariamos de te agradecer por ter feito parte disso! 🎉🎉🎉</Heading>
              <Text style={mainText}>
                Foram meses de muitos desafios, competições e apostas... E você fez parte dessa história!!
              </Text>
              <Text style={mainText}>
                Por mais que a BUBet seja um projeto independente, acreditamos ter conseguido aproximar batuqueiros de todo brasil,
                além de promover a integração conjuta e brincadeiras de apostas.
              </Text>
              <Text style={mainText}>
                Temos muitos novidades para 2026 e contamos com você para fazer parte de mais um ano de MUITOS desafios e apostas :).
                Enquanto isso, novas medalhas foram distribuídas para você!! Entre na plataforma para conferi-las :
              </Text>
              
              <Section style={verificationSection}>
                <Text style={verifyText}>Clique no botão abaixo</Text>

                <Button
                  href="https://www.bu-bet.com/dashboard"
                  style={buttonStyle}
                >Acessar plataforma</Button>
              </Section>
              <Text style={mainText}>
                Permanecemos a disposição para sanar quaisquer dúvidas, sugestões e críticas!! Entre em contato conosco sempre que quiser.
              </Text>
            </Section>
            <Hr />
            <Section style={lowerSection}>
              <Text style={cautionText}>
                Nossa plataforma JAMAIS irá solicitar sua senha ou verificação de cartão de crédito ou dados bancários.
                BUBet é apenas uma brincadeira :D
              </Text>
            </Section>
          </Section>
          <Text style={footerText}>
            Essa mensagem foi produzida e distribuída pela equipe BUBet. 
            Todos direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#fff',
  color: '#212121',
};

const container = {
  padding: '20px',
  margin: '0 auto',
  backgroundColor: '#eee',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const imageSection = {
  backgroundColor: '#0046a4',
  display: 'flex',
  padding: '20px 0',
  alignItems: 'center',
  justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const lowerSection = { padding: '25px 35px' };

const footerText = {
  ...text,
  fontSize: '12px',
  padding: '0 20px',
};

const verifyText = {
  ...text,
  margin: 0,
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const codeText = {
  ...text,
  fontWeight: 'bold',
  fontSize: '36px',
  margin: '10px 0',
  textAlign: 'center' as const,
};

const validityText = {
  ...text,
  margin: '0px',
  textAlign: 'center' as const,
};

const verificationSection = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = {
  background: "#0046a4", color: "#fff", padding: "12px 20px", margin: "10px 5px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const mainText = { ...text, marginBottom: '14px' };

const cautionText = { ...text, margin: '0px' };
