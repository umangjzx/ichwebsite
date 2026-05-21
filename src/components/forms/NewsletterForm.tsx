import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { validate, validationRules } from '@/utils/validators';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validate(email, validationRules.email);
    if (!result.isValid) {
      setError(result.error);
      return;
    }
    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 text-green-600 font-body text-sm">
        <CheckCircle className="h-5 w-5" />
        <span>Subscribed! Check your email for confirmation.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          placeholder="Your email address"
          className={`w-full px-3 py-2 bg-gray-800 border rounded-lg text-sm font-body text-white placeholder-gray-500 focus:outline-none focus:border-primary ${error ? 'border-red-500' : 'border-gray-700'}`}
          aria-label="Email for newsletter"
        />
        {error && <p className="mt-1 text-xs text-red-400 font-body">{error}</p>}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-white text-xs font-display font-bold uppercase rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
      >
        <Mail className="h-3 w-3" />
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;