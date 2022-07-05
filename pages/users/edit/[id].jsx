import { AddEdit, NewForm } from 'components/users';
import { userService } from 'services';

export default NewForm;

export async function getServerSideProps({ params }) {
    const user = await userService.getById(params.id);

    return {
        props: { user }
    }
}