import path from 'path';
import fs from 'fs/promises';
import { Fragment } from "react";

function serviceDetailPage(props) {

    const { loadedService } = props;

    // Fallback State for using fallback: true
    if (!loadedService) {
        return <p>Loading...</p>
    }

    return <Fragment>
        <h1 className='text-3xl text-center mb-4'>{loadedService.name}</h1>
        <p className='text-2xl text-center mb-4'>{loadedService.desc}</p>
    </Fragment>
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'services-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    const { params } = context;
    const serviceId = params.sid;

    const data = await getData();
    const service = data.services.find(service => service.id === serviceId);

    if (!service) {
        return { notFound: true };
    }

    return {
        props: {
            loadedService: service
        }
    }
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.services.map((service) => service.id);

    const pathsWithParams = ids.map((id) => ({ params: { sid: id } }));

    return {
        paths: pathsWithParams,
        // fallback: false
        fallback: true
        // fallback: 'blocking'
    }
}

export default serviceDetailPage;
