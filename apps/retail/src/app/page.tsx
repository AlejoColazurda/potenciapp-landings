'use client';

import { ShoppingCart, Truck, Shield, Headphones } from 'lucide-react';
import { Layout, Hero, ContactForm } from '@potenciapp/landing-core/components';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { content } from '@/content';

const iconMap: Record<string, React.ReactNode> = {
  'Envío Gratis': <Truck className="h-8 w-8" />,
  'Garantía Oficial': <Shield className="h-8 w-8" />,
  'Soporte Técnico': <Headphones className="h-8 w-8" />,
};

export default function HomePage() {
  return (
    <Layout
      header={{
        brandName: content.brandName,
        logo: content.logo,
        navItems: [
          { label: 'Productos', href: '#productos' },
          { label: 'Categorías', href: '#categorias' },
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

      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-background rounded-lg">
                <div className="text-primary">
                  {iconMap[service.title] || <ShoppingCart className="h-8 w-8" />}
                </div>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Productos Destacados</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    {product.badge && (
                      <Badge variant="secondary">{product.badge}</Badge>
                    )}
                  </div>
                  <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Agregar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {content.storeInfo.onlineStoreUrl && (
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <a href={content.storeInfo.onlineStoreUrl}>
                  Ver Todos los Productos
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="categorias" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Categorías</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline">Ver más</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contactanos</h2>
          
          <ContactForm 
            vertical="retail"
            brandName={content.brandName}
          />
        </div>
      </section>
    </Layout>
  );
}
