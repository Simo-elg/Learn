import type {FormEvent} from 'react';
import {useState} from 'react';
import Header from './Header';

export default function Contact() {

    // region State
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('')

    // error State 
    const [errors, setError] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({})

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // soumission du formulaire
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // validation 
        const newerror: typeof errors = {}
        if (!name.trim()) {
            newerror.name = 'Name is required';
        }
        if (!email.trim()) {
            newerror.email = 'Email is required';
        }
        else if (!emailRegex.test(email)) {
            newerror.email = 'Email format is invalid';
        }
        if (!message.trim()) {
            newerror.message = 'Message is required';
        }

        setError(newerror);
        if (Object.keys(newerror).length > 0) return;

        // if no errors, we can submit the form
        console.log('[Contact] handleSubmit',{ name, email, message });
        alert('Form submitted successfully!');

        // reset form 
        setName('');
        setEmail('');
        setMessage('');
        setError({});
    }

    return (

        <>
        <Header title='Contact us !'></Header>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto mt-8 p-6 bg-white shadow rounded space-y-4'>
            <div>
                <label htmlFor="name" className='block font-medium mb-1'>
                    Name :
                </label>
                <input id='name' value={name} type="text" onChange={e => setName(e.target.value)} className='w-full border border-gray-300 rounded px-3 py-2' />
                {errors.name && (
                    <p className='mt-1 text-red-600 text-sm'>{errors.name}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className='block font-medium mb-1'>
                    Email : 
                </label>
                <input id='email' value={email} type="text" onChange={e => setEmail(e.target.value)} className='w-full border border-gray-300 rounded px-3 py-2' />
                {errors.email && (
                    <p className='mt-1 text-red-600 text-sm'>{errors.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="message" className='block font-medium mb-1'>
                    Message :
                </label>
                <input type="text" value={message} id="message" onChange={e => setMessage(e.target.value)} className='w-full border border-gray-300 rounded px-3 py-2' />
                {errors.message && (
                    <p className='mt-1 text-red-600 text-sm'>{errors.message}</p>
                )}
            </div>

            <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Submit</button>

        </form>
        </>

    );

}