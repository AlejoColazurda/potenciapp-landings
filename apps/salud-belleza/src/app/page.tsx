'use client';

import { 
  Container, 
  Title, 
  Text, 
  Card, 
  SimpleGrid, 
  Badge, 
  Group, 
  Stack,
  Button,
  Box,
} from '@mantine/core';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { content } from '@/content';

export default function HomePage() {
  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Tratamientos', href: '#tratamientos' },
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

      <Box id="tratamientos" py="xl" bg="var(--bg-primary)">
        <Container size="lg">
          <Title order={2} ta="center" mb="xl">
            Nuestros Tratamientos
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
            {content.treatments.map((treatment, index) => (
              <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                <Group justify="space-between" mb="xs">
                  <Text fw={500}>{treatment.name}</Text>
                  <Badge color="pink" variant="light">
                    {treatment.category}
                  </Badge>
                </Group>

                <Text size="sm" c="dimmed" mb="md">
                  {treatment.description}
                </Text>

                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    {treatment.duration}
                  </Text>
                  <Text fw={700} c="pink">
                    {treatment.price}
                  </Text>
                </Group>
              </Card>
            ))}
          </SimpleGrid>

          {content.bookingUrl && (
            <Group justify="center" mt="xl">
              <Button 
                component="a" 
                href={content.bookingUrl}
                size="lg" 
                color="pink"
              >
                Reservar Turno Online
              </Button>
            </Group>
          )}
        </Container>
      </Box>

      {content.professionals && content.professionals.length > 0 && (
        <Box id="equipo" py="xl" bg="var(--bg-secondary)">
          <Container size="lg">
            <Title order={2} ta="center" mb="xl">
              Nuestro Equipo
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {content.professionals.map((pro, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <Stack gap="xs">
                    <Text fw={600} size="lg">{pro.name}</Text>
                    <Text c="pink" size="sm">{pro.role}</Text>
                    {pro.specialties && (
                      <Group gap="xs">
                        {pro.specialties.map((spec, i) => (
                          <Badge key={i} variant="outline" size="sm">
                            {spec}
                          </Badge>
                        ))}
                      </Group>
                    )}
                  </Stack>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      )}

      <Box id="contacto" py="xl" bg="var(--bg-primary)">
        <Container size="sm">
          <Title order={2} ta="center" mb="xl">
            Contactanos
          </Title>
          
          <ContactForm 
            vertical="salud-belleza"
            brandName={content.brandName}
          />
        </Container>
      </Box>
    </Layout>
  );
}
