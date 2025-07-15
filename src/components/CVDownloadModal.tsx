import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, User, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  // EmailJS configuration - using the same working template as contact form
  const EMAILJS_SERVICE_ID = 'service_ytllrvg';
  const EMAILJS_TEMPLATE_ID = 'template_40fkkzh'; // Same as contact form
  const EMAILJS_PUBLIC_KEY = 'TOAl1E-7CTA_3PjP_';

  const handleDownload = () => {
    // Direct download without email notification
    const link = document.createElement('a');
    link.href = '/cv_zine_el_aabidine_hamdoun.pdf';
    link.download = 'Zine_El_Aabidine_Hamdoun_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "CV Downloaded",
      description: "Thank you for your interest!",
    });
    
    onClose();
  };

  const handleDownloadWithNotification = async () => {
    if (!fullName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name to proceed.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Use the exact same method as the working contact form
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      console.log('CV download email sent successfully:', result.text);

      // After successful email, trigger download
      const link = document.createElement('a');
      link.href = '/cv_zine_el_aabidine_hamdoun.pdf';
      link.download = 'Zine_El_Aabidine_Hamdoun_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "CV Downloaded",
        description: `Thank you ${fullName}! Your download has started.`,
      });

      onClose();
      setFullName('');
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Even if email fails, still allow download
      const link = document.createElement('a');
      link.href = '/cv_zine_el_aabidine_hamdoun.pdf';
      link.download = 'Zine_El_Aabidine_Hamdoun_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "CV Downloaded",
        description: "Download started. (Email notification failed)",
        variant: "default",
      });

      onClose();
      setFullName('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFullName('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5 text-accent" />
            Download CV
          </DialogTitle>
          <DialogDescription>
            Would you like to share your name? This helps me know who's interested in my work.
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} className="space-y-4">
          {/* Hidden fields for EmailJS - matching contact form structure */}
          <input type="hidden" name="email" value="cv-download-notification@portfolio.com" />
          <input
            type="hidden"
            name="message"
            value={`CV Download Notification: ${fullName.trim()} has downloaded your CV from your portfolio website on ${new Date().toLocaleString()}.`}
          />

          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name (Optional)
            </Label>
            <Input
              id="fullName"
              name="name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && fullName.trim()) {
                  handleDownloadWithNotification();
                }
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button
              onClick={handleDownloadWithNotification}
              disabled={isLoading || !fullName.trim()}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" />
                  Share Name & Download
                </>
              )}
            </Button>
            
            <Button
              variant="outline"
              onClick={handleDownload}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Just Download
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Your information is only used to send me a notification and won't be stored or shared.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CVDownloadModal;
