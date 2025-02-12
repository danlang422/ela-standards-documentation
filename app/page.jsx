import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'ELA Standards Documentation',
  description: 'Interactive documentation system for ELA standards',
}

const standards = [
  {
    id: 'RL/RI.9.1',
    title: 'Cite Textual Evidence',
    descriptor: 'Cite strong and thorough textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.',
    proficiencyLevels: {
      exemplary: 'Your writing demonstrates sophisticated selection and integration of compelling textual evidence.',
      proficient: 'Your writing includes relevant textual evidence that is smoothly integrated.',
      developing: 'Your writing attempts to include textual evidence but may need more development.'
    }
  },
  {
    id: 'RL/RI.9.2',
    title: 'Central Idea and Development',
    descriptor: 'Determine a central idea of a text and analyze its development over the course of the text.',
    proficiencyLevels: {
      exemplary: 'You can identify complex central ideas and analyze their sophisticated development.',
      proficient: 'You can identify central ideas and explain their development clearly.',
      developing: 'You can identify basic central ideas but may need help tracking their development.'
    }
  }
];

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">ELA Standards Documentation</h1>
      
      <div className="max-w-4xl mx-auto">
        {standards.map(standard => (
          <Card key={standard.id} className="mb-6">
            <CardHeader>
              <CardTitle>{standard.id} - {standard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Standard Description</h3>
                <p className="text-gray-700">{standard.descriptor}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Proficiency Levels</h3>
                <div className="space-y-3">
                  {Object.entries(standard.proficiencyLevels).map(([level, description]) => (
                    <div key={level} className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-medium capitalize mb-1">{level}</div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}