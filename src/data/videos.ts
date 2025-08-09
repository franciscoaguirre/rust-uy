export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  speaker: string;
  meetupDate: string;
  complexity: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  category: 'language-features' | 'applications';
  description: string;
}

export const videos: Video[] = [
  {
    id: 'makepad-part-1',
    title: 'Cross-platform Rust Apps en Makepad - Parte\u00A01',
    youtubeId: 'jRh1YqzGMIs',
    speaker: 'Julian Montes de Oca',
    meetupDate: '2025-08-07',
    complexity: 'beginner',
    topics: ['makepad', 'gui'],
    category: 'applications',
    description: 'Introducción a Makepad: framework para crear interfaces de usuario nativas en Rust.'
  },
  {
    id: 'makepad-part-2',
    title: 'Cross-platform Rust Apps en Makepad - Parte\u00A02',
    youtubeId: 'NofPk8smPNk',
    speaker: 'Franco Profeti',
    meetupDate: '2025-08-07',
    complexity: 'intermediate',
    topics: ['makepad', 'gui'],
    category: 'applications',
    description: 'Exploracion de problemas encontrados al implementar aplicaciones con Makepad.'
  }
];

export const complexityLabels = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado'
};

export const categoryLabels = {
  'language-features': 'Características del Lenguaje',
  'applications': 'Aplicaciones'
};
