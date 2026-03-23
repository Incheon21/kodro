import { StructuredText } from "react-datocms";
import Link from "next/link";

async function getProjects() {
  const query = `
    query MyQuery {
      allProjects {
        id
        images {
          url
        }
        title
        description {
          value
        }
        links {
          id
          text
          link
        }
        slug
      }
    }
  `;

  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const { data } = await response.json();
  return data?.allProjects || [];
}

export default async function GalleryPage() {
  const projects = await getProjects();

  return (
    <div className="mt-16 md:mt-24 flex flex-1 flex-col items-center pb-24 relative overflow-hidden px-4 md:px-8 max-w-7xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center mt-12 text-[var(--foreground)]">
        Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project: any) => (
          <div 
            key={project.id} 
            className="flex flex-col group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border card-inverted"
          >
            {project.images && project.images.length > 0 && (
              <div className="relative w-full aspect-video overflow-hidden card-inverted-border border-b">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.images[0].url} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 relative z-10"
                />
              </div>
            )}
            
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-2xl font-semibold mb-3 tracking-tight card-inverted-text">
                {project.title}
              </h2>
              
              <div className="text-sm mb-6 flex-1 leading-relaxed font-light [&>p]:mb-4 last:[&>p]:mb-0 card-inverted-subtext">
                <StructuredText data={project.description?.value} />
              </div>
              
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t card-inverted-border">
                  {project.links.map((link: any) => (
                    <Link
                      key={link.id}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 card-inverted-link"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}