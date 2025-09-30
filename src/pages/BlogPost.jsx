import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import blogPosts from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug)
    setPost(foundPost)
    
    if (foundPost) {
      // Buscar posts relacionados (mesmo autor ou tags similares)
      const related = blogPosts
        .filter(p => p.id !== foundPost.id)
        .filter(p => 
          p.author === foundPost.author || 
          p.tags.some(tag => foundPost.tags.includes(tag))
        )
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post não encontrado</h1>
          <p className="text-gray-600 mb-4">O artigo que você está procurando não existe.</p>
          <Button onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Blog
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Header */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h1>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min de leitura</span>
                    </div>
                  </div>

                  {/* Social Share */}
                  <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Compartilhar:</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Facebook className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {post.content}
                  </div>
                </div>
              </article>

              {/* Author Profile */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/src/assets/author-profile.jpg" />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Abraão Nascimento</h3>
                      <p className="text-gray-600">Especialista em Vans e Transporte Executivo</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Abraão Nascimento é um especialista reconhecido no mercado brasileiro de vans executivas, 
                    ambulâncias e motorhomes, com mais de 15 anos de experiência. Formado em Engenharia Mecânica 
                    pela USP, possui certificações internacionais em transporte de passageiros e já trabalhou 
                    com as principais montadoras do país. Seu conhecimento técnico e prático o torna uma 
                    referência confiável para quem busca informações precisas sobre o setor.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Badge variant="outline">Especialista em Vans</Badge>
                    <Badge variant="outline">15+ Anos de Experiência</Badge>
                    <Badge variant="outline">Certificado USP</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Related Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Leituras Sugeridas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="group cursor-pointer" onClick={() => window.location.href = `/blog/${relatedPost.slug}`}>
                        <div className="aspect-video overflow-hidden rounded-lg mb-2">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {relatedPost.date} • {relatedPost.readTime} min
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Receba os melhores artigos sobre vans diretamente no seu e-mail.
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Seu e-mail" className="text-sm" />
                      <Button className="w-full text-sm">Inscrever-se</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost