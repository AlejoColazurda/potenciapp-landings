'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Card, 
  Flex, 
  Grid, 
  Badge, 
  Button,
  Section,
  Separator,
  Strong,
} from '@radix-ui/themes';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { content } from '@/content';

export default function HomePage() {
  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Servicios', href: '#servicios' },
          { label: 'Equipo', href: '#equipo' },
          { label: 'Contacto', href: '#contacto' },
        ],
      }}
      footer={{
        brandName: content.brandName,
        contact: content.contact,
        social: content.social,
      }}
    >
      <Hero {...content.hero} />

      <Section id="servicios" size="3">
        <Container size="4">
          <Heading size="8" align="center" mb="6">
            Áreas de Práctica
          </Heading>

          <Grid columns={{ initial: '1', md: '3' }} gap="6">
            {content.professionalServices.map((service, index) => (
              <Card key={index} size="3">
                <Flex direction="column" gap="3">
                  <Heading size="5">{service.name}</Heading>
                  <Text color="gray">{service.description}</Text>
                  
                  {service.features && (
                    <Flex gap="2" wrap="wrap" mt="2">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="soft" color="blue">
                          {feature}
                        </Badge>
                      ))}
                    </Flex>
                  )}
                </Flex>
              </Card>
            ))}
          </Grid>

          {content.consultationCta && (
            <Box mt="8">
              <Card size="4">
                <Flex direction="column" align="center" gap="3" py="4">
                  <Heading size="6">{content.consultationCta.text}</Heading>
                  {content.consultationCta.description && (
                    <Text color="gray" align="center">
                      {content.consultationCta.description}
                    </Text>
                  )}
                  <Button size="3" asChild>
                    <a href="#contacto">Agendar Consulta</a>
                  </Button>
                </Flex>
              </Card>
            </Box>
          )}
        </Container>
      </Section>

      {content.team && content.team.length > 0 && (
        <Section id="equipo" size="3" style={{ backgroundColor: 'var(--gray-2)' }}>
          <Container size="4">
            <Heading size="8" align="center" mb="6">
              Nuestro Equipo
            </Heading>

            <Grid columns={{ initial: '1', md: '2' }} gap="6">
              {content.team.map((member, index) => (
                <Card key={index} size="3">
                  <Flex direction="column" gap="2">
                    <Heading size="5">{member.name}</Heading>
                    <Text color="blue" weight="medium">{member.role}</Text>
                    
                    {member.bio && (
                      <Text color="gray" size="2">{member.bio}</Text>
                    )}
                    
                    {member.credentials && (
                      <Flex gap="2" wrap="wrap" mt="2">
                        {member.credentials.map((cred, i) => (
                          <Badge key={i} variant="outline">
                            {cred}
                          </Badge>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {content.industries && content.industries.length > 0 && (
        <Section size="2">
          <Container size="4">
            <Separator size="4" />
            <Box py="6">
              <Heading size="5" align="center" mb="4">
                Industrias que Asesoramos
              </Heading>
              <Flex gap="3" wrap="wrap" justify="center">
                {content.industries.map((industry, index) => (
                  <Badge key={index} size="2" variant="soft">
                    {industry}
                  </Badge>
                ))}
              </Flex>
            </Box>
            <Separator size="4" />
          </Container>
        </Section>
      )}

      <Section id="contacto" size="3">
        <Container size="2">
          <Heading size="8" align="center" mb="6">
            Contactanos
          </Heading>
          
          <Box mb="4">
            <Text align="center" color="gray">
              <Strong>{content.contact.address}</Strong> | {content.contact.schedule}
            </Text>
          </Box>
          
          <ContactForm 
            vertical="servicios-profesionales"
            brandName={content.brandName}
          />
        </Container>
      </Section>
    </Layout>
  );
}
