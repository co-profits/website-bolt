import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  help?: string;
  error?: string;
  type?: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, name, required, help, error, type = 'text', placeholder, options, value, onChange }, ref) => {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;

  const baseClass = `w-full rounded-lg border bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-light-green/50 ${
    error ? 'border-red-500' : 'border-ink-600 focus:border-brand-light-green'
  }`;

  const labelEl = (
    <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-ink-100">
      {label} {required && <span className="text-brand-light-green">*</span>}
      {!required && <span className="ml-1 text-xs text-ink-500">(optional)</span>}
    </label>
  );

  const helpEl = help ? (
    <p id={helpId} className="mt-1.5 text-xs text-ink-400">{help}</p>
  ) : null;

  const errorEl = error ? (
    <p id={errorId} className="mt-1.5 text-xs text-red-400">{error}</p>
  ) : null;

  if (type === 'select') {
    return (
      <div>
        {labelEl}
        <select
          id={fieldId}
          name={name}
          ref={ref as React.Ref<HTMLSelectElement>}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : help ? helpId : undefined}
          className={baseClass}
        >
          <option value="">{placeholder || 'Select...'}</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {helpEl}
        {errorEl}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div>
        {labelEl}
        <textarea
          id={fieldId}
          name={name}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : help ? helpId : undefined}
          className={`${baseClass} min-h-[100px] resize-y`}
        />
        {helpEl}
        {errorEl}
      </div>
    );
  }

  return (
    <div>
      {labelEl}
      <input
        id={fieldId}
        name={name}
        type={type}
        ref={ref as React.Ref<HTMLInputElement>}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : help ? helpId : undefined}
        className={baseClass}
      />
      {helpEl}
      {errorEl}
    </div>
  );
});

FormField.displayName = 'FormField';
