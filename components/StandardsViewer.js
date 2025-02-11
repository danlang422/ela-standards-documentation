import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import Papa from 'papaparse';

const StandardsViewer = () => {
  const [standards, setStandards] = useState([]);
  const [expandedStandard, setExpandedStandard] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(9);
  const [selectedSemester, setSelectedSemester] = useState(1);

  useEffect(() => {
    const loadStandards = async () => {
      try {
        const response = await window.fs.readFile('data/standards.csv', { encoding: 'utf8' });
        const parsed = Papa.parse(response, {
          header: true,
          skipEmptyLines: true
        });
        
        const processedStandards = parsed.data.map(row => ({
          id: row.id,
          title: row.title,
          descriptor: row.descriptor,
          grade: parseInt(row.grade),
          semester: parseInt(row.semester),
          proficiencyLevels: {
            developing: row.developing,
            proficient: row.proficient,
            exemplary: row['developing.1']
          },
          iCanStatements: {
            developing: [],
            proficient: [],
            exemplary: []
          },
          resources: []
        }));
        
        setStandards(processedStandards);
      } catch (error) {
        console.error('Error loading standards:', error);
      }
    };

    loadStandards();
  }, []);

  const filteredStandards = standards.filter(
    s => s.grade === selectedGrade && s.semester === selectedSemester
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>ELA Standards - Grade {selectedGrade}</CardTitle>
          <div className="flex gap-4">
            <select 
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              <option value={9}>Grade 9</option>
              <option value={10}>Grade 10</option>
              <option value={11}>Grade 11</option>
            </select>
            <select 
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              <option value={1}>Semester 1</option>
              <option value={2}>Semester 2</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          {filteredStandards.map(standard => (
            <div key={standard.id} className="mb-4">
              <button
                onClick={() => setExpandedStandard(expandedStandard === standard.id ? null : standard.id)}
                className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="font-medium">{standard.id} - {standard.title}</span>
                {expandedStandard === standard.id ? 
                  <ChevronDown className="w-5 h-5" /> : 
                  <ChevronRight className="w-5 h-5" />
                }
              </button>
              
              {expandedStandard === standard.id && (
                <div className="mt-4 pl-4">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Standard Description</h3>
                    <p className="text-gray-700">{standard.descriptor}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Proficiency Levels</h3>
                    <div className="space-y-3">
                      {Object.entries(standard.proficiencyLevels).map(([level, description]) => (
                        <div key={level} className="p-3 bg-white border rounded-lg">
                          <div className="font-medium capitalize mb-1">{level}</div>
                          <p className="text-sm text-gray-600">
                            {description === "To be developed" ? 
                              <span className="text-yellow-600 italic">To be developed</span> : 
                              description
                            }
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {standard.iCanStatements.developing.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">"I Can" Statements</h3>
                      {Object.entries(standard.iCanStatements).map(([level, statements]) => (
                        <div key={level} className="mb-4">
                          <h4 className="text-sm font-medium capitalize mb-2">{level}</h4>
                          <ul className="list-disc pl-5 space-y-2">
                            {statements.map((statement, index) => (
                              <li key={index} className="text-sm text-gray-700">{statement}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {standard.resources.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Resources</h3>
                      <ul className="space-y-2">
                        {standard.resources.map((resource, index) => (
                          <li key={index} className="flex items-center text-blue-600 hover:text-blue-800">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            <a href={resource.url} target="_blank" rel="noopener noreferrer">
                              {resource.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StandardsViewer;