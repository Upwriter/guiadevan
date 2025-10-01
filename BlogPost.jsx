import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '../data/blogPosts';
import abraaoCorreaPhoto from '../assets/abraao-correa.png';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(5);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Artigo não encontrado
          </h1>
          <Link 
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content) => {
    return content
      .split('\n')
      .map((paragraph, index) => {
        if (paragraph.trim() === '') return null;
        
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
              {paragraph.replace('# ', '')}
            </h1>
          );
        }
        
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              {paragraph.replace('## ', '')}
            </h2>
          );
        }
        
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-6">
              {paragraph.replace('### ', '')}
            </h3>
          );
        }
        
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <p key={index} className="font-bold text-gray-900 mb-4">
              {paragraph.replace(/\*\*/g, '')}
            </p>
          );
        }
        
        if (paragraph.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-700 mb-2 ml-4">
              {paragraph.replace('- ', '')}
            </li>
          );
        }
        
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o blog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Header do Post */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(post.publishDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </button>
                </div>

                {/* Imagem de Destaque */}
                <div className="mb-8">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Conteúdo do Post */}
                <div className="prose prose-lg max-w-none">
                  {formatContent(post.content)}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seção do Autor */}
              <div className="bg-gray-50 p-8 border-t border-gray-200">
                <div className="flex items-start space-x-4">
                  <img 
                    src={abraaoCorreaPhoto}
                    alt="Abraão Correa"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Abraão Correa
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Abraão Correa é especialista em veículos comerciais com mais de 10 anos de experiência no mercado brasileiro. 
                      Formado em Engenharia Mecânica, dedica-se a orientar empresas na escolha das melhores soluções em transporte, 
                      sempre focando na relação custo-benefício e nas necessidades específicas de cada cliente. 
                      Sua expertise abrange desde vans executivas até ambulâncias e veículos para motorhome, 
                      oferecendo análises técnicas confiáveis e atualizadas sobre o mercado nacional.
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href="#" 
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Ver outros artigos
                      </a>
                      <a 
                        href="https://wa.link/8sjwum" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-800 font-medium text-sm"
                      >
                        Falar no WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Call to Action */}
            <div className="mt-8 bg-blue-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de uma Van para seu Negócio?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Nossa equipe especializada pode ajudar você a encontrar a van ideal. 
                Orçamento gratuito e atendimento personalizado.
              </p>
              <a 
                href="https://wa.link/8sjwum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Artigos Relacionados
              </h3>
              
              <div className="space-y-4">
                {recentPosts
                  .filter(p => p.id !== post.id)
                  .slice(0, 5)
                  .map((relatedPost) => (
                  <article key={relatedPost.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <Link 
                      to={`/blog/${relatedPost.slug}`}
                      className="block hover:text-blue-600 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(relatedPost.publishDate).toLocaleDateString('pt-BR')}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  Receba Novidades
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Fique por dentro das últimas novidades do mercado de vans.
                </p>
                <a 
                  href="https://wa.link/8sjwum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
