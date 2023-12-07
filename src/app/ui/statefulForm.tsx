import { useFormState } from "react-dom";

async function increment(previousState: number, formData: any) {
  return previousState + 1;
}

export default function StatefulForm() {
  const [state, formAction] = useFormState(increment, 0);

  return (
    <form>
      <div className="mt-6">
        {state}
        <button className="ml-2"formAction={formAction}>Increment</button>
      </div>
    </form>
  );
}
