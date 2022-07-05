import { Link } from 'components';

export default Home;

function Home() {
    return (
        <div className='text-center'>
            <h3>Next.js 10 - CRUD Example</h3>

            <hr />

            <div className='paragraph mt-5'>
                <p>
                    An example app showing how to list, add, edit and delete customer records
                    with Next.js 10 and the React Hook Form library.
                    <Link href="/users"> &gt;&gt; Manage Customers</Link>
                </p>
            </div>
        </div>
    );
}
