export interface Project {
  key: string;
  link: string;
  img: string;
  title: string;
  description: string;
}

export interface SocialLink {
  title: string;
  link: string;
  icon: string;
}

export interface ListItem {
  name: string;
}

export interface ImageData {
  src?: string;
  childImageSharp?: {
    gatsbyImageData: {
      images: {
        fallback: {
          src: string;
        };
      };
    };
  };
}