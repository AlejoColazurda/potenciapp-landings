'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Badge,
  HStack,
  VStack,
  Button,
  Flex,
  Icon,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { content } from '@/content';

const categoryColors: Record<string, string> = {
  estructuras: 'orange',
  construccion: 'blue',
  metalurgica: 'green',
  herreria: 'purple',
  mantenimiento: 'gray',
  otro: 'gray',
};

export default function HomePage() {
  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Proyectos', href: '#proyectos' },
          { label: 'Equipamiento', href: '#equipamiento' },
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

      <Box py={16} bg="gray.50">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {content.services.map((service, index) => (
              <Card key={index} variant="outline">
                <CardHeader>
                  <Heading size="md">{service.title}</Heading>
                </CardHeader>
                <CardBody pt={0}>
                  <Text color="gray.600">{service.description}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box id="proyectos" py={20}>
        <Container maxW="6xl">
          <Heading textAlign="center" mb={12}>
            Proyectos Realizados
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {content.projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <VStack align="start" spacing={2}>
                    <Badge colorScheme={categoryColors[project.category]}>
                      {project.category}
                    </Badge>
                    <Heading size="md">{project.name}</Heading>
                  </VStack>
                </CardHeader>
                <CardBody pt={0}>
                  <Text color="gray.600" mb={4}>{project.description}</Text>
                  <HStack spacing={4} fontSize="sm" color="gray.500">
                    {project.location && <Text>{project.location}</Text>}
                    {project.year && <Text>{project.year}</Text>}
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {content.equipment && content.equipment.length > 0 && (
        <Box id="equipamiento" py={20} bg="gray.900" color="white">
          <Container maxW="6xl">
            <Heading textAlign="center" mb={12}>
              Nuestro Equipamiento
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {content.equipment.map((item, index) => (
                <Box key={index} p={6} borderRadius="lg" bg="gray.800">
                  <Heading size="md" color="orange.400" mb={2}>
                    {item.name}
                  </Heading>
                  {item.description && (
                    <Text color="gray.300">{item.description}</Text>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      )}

      {content.certifications && content.certifications.length > 0 && (
        <Box py={12}>
          <Container maxW="6xl">
            <Divider mb={8} />
            <VStack spacing={4}>
              <Heading size="md">Certificaciones</Heading>
              <HStack spacing={4} wrap="wrap" justify="center">
                {content.certifications.map((cert, index) => (
                  <Badge key={index} colorScheme="green" fontSize="md" p={2}>
                    {cert}
                  </Badge>
                ))}
              </HStack>
            </VStack>
            <Divider mt={8} />
          </Container>
        </Box>
      )}

      {content.serviceAreas && content.serviceAreas.length > 0 && (
        <Box py={12} bg="gray.50">
          <Container maxW="4xl">
            <VStack spacing={6}>
              <Heading size="md">Zonas de Cobertura</Heading>
              <List spacing={2}>
                {content.serviceAreas.map((area, index) => (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {area}
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Container>
        </Box>
      )}

      <Box id="contacto" py={20}>
        <Container maxW="xl">
          <Heading textAlign="center" mb={4}>
            Solicitá tu Presupuesto
          </Heading>
          
          {content.quoteRequest?.responseTime && (
            <Text textAlign="center" color="gray.600" mb={8}>
              Respondemos en {content.quoteRequest.responseTime}
            </Text>
          )}
          
          <ContactForm 
            vertical="construccion-metalurgica"
            brandName={content.brandName}
          />
        </Container>
      </Box>
    </Layout>
  );
}
