import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight, Plus } from 'lucide-react';

const StandardDocumentation = () => {
  const [expandedStandard, setExpandedStandard] = useState(null);

  const standards = [
    {
      id: 'RL/RI.9.1',
      title: 'Cite Textual Evidence',
      officialText: 'Cite strong and thorough textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.',
      proficiencyLevels: {
        exemplary: 'Your writing demonstrates sophisticated selection and integration of compelling textual evidence...',
        proficient: 'Your writing includes relevant textual evidence that is smoothly integrated...',
        developing: 'Your writing attempts to include textual evidence but may need more...',
        incomplete: 'Your writing lacks sufficient textual evidence or citations...'
      },
      iCanStatements: {
        basic: [
          'I can identify relevant evidence in a text',
          'I can explain what a text directly states'
        ],
        intermediate: [
          'I can select strong evidence to support my analysis',
          'I can make logical inferences based on textual evidence'
        ],
        advanced: [
          'I can integrate multiple pieces of evidence seamlessly',
          'I can evaluate the strength of different pieces of evidence'
        ]
      }
    }
    // Additional standards would be added here
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>ELA Standards Documentation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-600 mb-4">
            Select a standard to view or edit its documentation components
          </div>
          
          {standards.map(standard => (
            <div key={standard.id} className="mb-4">
              <button
                onClick={() => setExpandedStandard(expandedStandard === standard.id ? null : standard.id)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="font-medium">{standard.id} - {standard.title}</span>
                {expandedStandard === standard.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
              
              {expandedStandard === standard.id && (
                <div className="mt-4 pl-4">
                  {/* Official Standard Text */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Official Standard Text</h3>
                    <p className="text-gray-700">{standard.officialText}</p>
                  </div>
                  
                  {/* Proficiency Levels */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Proficiency Levels</h3>
                    <div className="space-y-3">
                      {Object.entries(standard.proficiencyLevels).map(([level, description]) => (
                        <div key={level} className="p-3 bg-white border rounded-lg">
                          <div className="font-medium capitalize mb-1">{level}</div>
                          <p className="text-sm text-gray-600">{description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* I Can Statements */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">"I Can" Statements</h3>
                    {Object.entries(standard.iCanStatements).map(([level, statements]) => (
                      <div key={level} className="mb-4">
                        <h4 className="text-sm font-medium capitalize mb-2">{level} Skills</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {statements.map((statement, index) => (
                            <li key={index} className="text-sm text-gray-700">{statement}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  {/* Add New Component Button */}
                  <button className="flex items-center text-sm text-blue-600 hover:text-blue-800">
                    <Plus className="w-4 h-4 mr-1" />
                    Add New Component
                  </button>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StandardDocumentation;
