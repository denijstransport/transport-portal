export default function Login(){
return (
<div className="max-w-md mx-auto card">
<h1 className="text-2xl font-semibold mb-4">Inloggen</h1>
<form className="space-y-3">
<input className="input" placeholder="E-mail"/>
<input className="input" placeholder="Wachtwoord" type="password"/>
<button className="btn btn-primary w-full">Inloggen</button>
</form>
<p className="text-sm mt-3">(In de echte versie wordt dit gekoppeld aan NextAuth.)</p>
</div>
);
}
