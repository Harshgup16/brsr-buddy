import { useState, useCallback } from 'react';
import { Upload, FileText, FileSpreadsheet, Loader2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BRSRData, ExtractionProgress } from '@/types/brsr';
import { mockIOCLData } from '@/data/mockBRSRData';
import { cn } from '@/lib/utils';

interface UploadSectionProps {
  onDataExtracted: (data: BRSRData) => void;
}

const UploadSection = ({ onDataExtracted }: UploadSectionProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [progress, setProgress] = useState<ExtractionProgress | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.name.endsWith('.xlsx') || droppedFile.name.endsWith('.xls'))) {
      setFile(droppedFile);
      setError(null);
    } else {
      setError('Please upload a PDF or Excel file');
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    }
  }, []);

  const simulateExtraction = async () => {
    setIsExtracting(true);
    setError(null);
    
    const chunks = [
      { name: 'Company Details (Q1-Q15)', delay: 800 },
      { name: 'Products & Operations (Q16-Q19)', delay: 600 },
      { name: 'Employees & CSR (Q20-Q26)', delay: 700 },
      { name: 'Policy Matrix (P1-P9)', delay: 900 },
      { name: 'Principle 1: Ethics', delay: 500 },
      { name: 'Principle 2: Products', delay: 500 },
      { name: 'Principle 3: Wellbeing', delay: 600 },
      { name: 'Principle 3: Safety', delay: 500 },
      { name: 'Principle 4: Stakeholders', delay: 400 },
      { name: 'Principle 5: Human Rights', delay: 500 },
      { name: 'Principle 6: Energy/Emissions', delay: 700 },
      { name: 'Principle 6: Water/Waste', delay: 600 },
      { name: 'Principle 7: Public Policy', delay: 400 },
      { name: 'Principle 8: CSR', delay: 500 },
      { name: 'Principle 9: Consumer', delay: 500 },
    ];

    for (let i = 0; i < chunks.length; i++) {
      setProgress({
        currentChunk: i + 1,
        totalChunks: chunks.length,
        chunkName: chunks[i].name,
        status: 'processing',
      });
      await new Promise(resolve => setTimeout(resolve, chunks[i].delay));
    }

    setProgress({
      currentChunk: chunks.length,
      totalChunks: chunks.length,
      chunkName: 'Complete',
      status: 'completed',
    });

    setTimeout(() => {
      setIsExtracting(false);
      onDataExtracted(mockIOCLData);
    }, 500);
  };

  const loadDemoData = () => {
    onDataExtracted(mockIOCLData);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-display font-bold text-foreground mb-3">
          Upload Your ESG Data
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Upload your company's sustainability reports, annual reports, or ESG data files. 
          Our AI will extract and structure the data according to SEBI's BRSR Annexure 1 format.
        </p>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 animate-slide-up",
          isDragging 
            ? "border-secondary bg-secondary/10 scale-[1.02]" 
            : file 
              ? "border-secondary/50 bg-card/50" 
              : "border-border hover:border-muted-foreground/50 bg-card/30",
          isExtracting && "pointer-events-none"
        )}
      >
        <input
          type="file"
          accept=".pdf,.xlsx,.xls"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isExtracting}
        />
        
        <div className="flex flex-col items-center gap-4">
          {file ? (
            <>
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                {file.name.endsWith('.pdf') ? (
                  <FileText className="w-8 h-8 text-secondary" />
                ) : (
                  <FileSpreadsheet className="w-8 h-8 text-secondary" />
                )}
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center">
                <Upload className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="text-center">
                <p className="font-medium text-foreground">
                  Drop your file here or click to browse
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Supports PDF, Excel (.xlsx, .xls)
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Extraction Progress */}
      {isExtracting && progress && (
        <div className="mt-6 p-6 rounded-xl bg-card/50 border border-border/50 animate-scale-in">
          <div className="flex items-center gap-3 mb-4">
            <Loader2 className="w-5 h-5 text-secondary animate-spin" />
            <span className="font-medium text-foreground">Extracting BRSR Data...</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{progress.chunkName}</span>
              <span className="text-secondary font-medium">
                {progress.currentChunk}/{progress.totalChunks}
              </span>
            </div>
            
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-300 rounded-full"
                style={{ width: `${(progress.currentChunk / progress.totalChunks) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="brsr"
          size="lg"
          onClick={simulateExtraction}
          disabled={!file || isExtracting}
          className="w-full sm:w-auto"
        >
          {isExtracting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Extracting...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Extract with AI
            </>
          )}
        </Button>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-sm">or</span>
        </div>
        
        <Button
          variant="outline"
          size="lg"
          onClick={loadDemoData}
          disabled={isExtracting}
          className="w-full sm:w-auto"
        >
          <FileText className="w-5 h-5" />
          Load IOCL Demo Data
        </Button>
      </div>

      {/* Info Cards */}
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {[
          { icon: Upload, title: 'Upload', desc: 'PDF or Excel files with ESG data' },
          { icon: Sparkles, title: 'AI Extraction', desc: 'Gemini 2.5 Flash processes your data' },
          { icon: CheckCircle2, title: 'BRSR Format', desc: 'Output matches SEBI Annexure 1' },
        ].map((item, i) => (
          <div 
            key={i}
            className="glass-card-hover p-5 animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
              <item.icon className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadSection;
