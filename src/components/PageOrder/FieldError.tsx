export function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="text-red-400 text-sm">{message}</p>;
}
