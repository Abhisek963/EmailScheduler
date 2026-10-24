import type { Email } from '../types/email';

type EmailDetailPageProps = {
    email: Email | null;
    onBack: () => void;
}

function EmailDetailPage({ email, onBack }: EmailDetailPageProps) {
    if(!email){
        return(
            <div className='mn-h-screen bg-gray-50 p-8'>
                <button onClick={onBack}
                className='rounded-lg border border-gray-200 px-4 py-2'
                >
                    Back to Dashboard
                </button>
                <p className='mt-6 text-gray-600 '>
                    No email selected yet!
                </p>
            </div>

        )
    }
    return(
        <div className='mn-h-screen bg-gray-50 p-8'>
                <button onClick={onBack}
                className='rounded-lg border border-gray-200 px-4 py-2'
                >
                    Back to Dashboard
                </button>
                <div className='mt-8 rounded-xl border border-gray-200 bg-white p-6 '>
                    <h1 className='text-2xl font-semibold text-gray-800  '>
                        {email.subject}
                    </h1>
                    <p className='mt-4 text-sm text-gray-600 '>
                        {email.sender}
                    </p>
                    <p className='mt-2 text-sm text-gray-600 '>
                        {email.recipient}
                    </p>
                    <p className='mt-6 text-gray-700 '>
                        {email.preview}
                    </p>
                    <p className='mt-4 text-sm text-gray-400 '>
                        Status: {email.status}
                    </p>
                </div>
            </div>
    )
}

export default EmailDetailPage;