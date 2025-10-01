import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, User, Calendar } from 'lucide-react';
import { blogPosts, searchPosts, getRecentPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = useMemo(() => {
    return searchPosts(searchTerm);
  }, [searchTerm]);

  const recentPosts = getRecentPosts(10);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do Blog */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Blog GuiaDeVan
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Informações especializadas sobre vans executivas, ambulâncias e motorhomes. 
              Dicas, análises e tendências do mercado brasileiro.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Barra de Busca */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar artigos por título, categoria ou palavras-chave..."
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Lista de Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts Principais */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {searchTerm ? `Resultados para "${searchTerm}"` : 'Últimos Artigos'}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nenhum artigo encontrado para sua busca.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="h-48 w-full object-cover md:h-full"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(post.publishDate).toLocaleDateString('pt-BR')}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600">
                            <Link to={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            
                            <Link 
                              to={`/blog/${post.slug}`}
                              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                            >
                              Leia Mais
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Artigos Recentes
              </h3>
              
              <div className="space-y-4">
                {recentPosts.slice(0, 5).map((post) => (
                  <article key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="block hover:text-blue-600 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{new Date(post.publishDate).toLocaleDateString('pt-BR')}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Categorias */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {['Van Executiva', 'Van de Trabalho', 'Ambulância', 'Motorhome'].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSearchTerm(category)}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">
                  Precisa de uma Van?
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Fale conosco e encontre a van ideal para seu negócio.
                </p>
                <a 
                  href="https://wa.link/8sjwum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
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

export default Blog;
