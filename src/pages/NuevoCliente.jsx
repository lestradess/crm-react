import { useNavigate, Form, useActionData } from 'react-router-dom'
import Formulario from '../components/formulario'
import Error from '../components/Error'

export async function action ({ request }) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')
    //validación de que un email tenga el formato adecuado
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        errores.push('El email no es válido')
    }
    //Validacion
    const errores = [];
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    //Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }
}

function NuevoCliente () {
    const errores = useActionData()
    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900"> Nuevo Cliente</h1>
            <p className='mt-3'>Rellena el formulario para crear un cliente nuevo</p>

            <div className="flex justify-end">
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-lg'
                    onClick={ () => navigate(-1) }
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
                { errores?.length && errores.map((error, i) => <Error key={ i }>{ error }</Error>) }
                <Form
                    method='post'
                >
                    <Formulario />
                    <input
                        type="submit"
                        value="Registrar cliente"
                        className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
                    />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente