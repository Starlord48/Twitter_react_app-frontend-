import { Avatar, Button } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadingImage] = useState(false);
    const [selectImage, setSelectedImage] = useState(null);

    const handelSubmit = (values) => {
        console.log("values", values)
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: ""
        },
        onSubmit:handelSubmit,
        validationSchema,
    })

    const handelSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setUploadingImage(false);
        setSelectedImage(imgUrl);
    }

    return (
        <div className='space-y-5'>
            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'>Home</h1>
            </section>
            <section className={'pb-10'}>
                <div className='flex space-x-5'>
                    <Avatar
                        alt="username"
                        src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
                    />
                    <div className='w-full'>
                        <form onSubmit={formik.handelSubmit}>
                            <div>
                                <input type='text' name='content' placeholder='What is happening'
                                    className={'border-none outline-none text-xl bg-transparent'}
                                    {...formik.getFieldProps("content")}
                                />
                                {formik.errors.content && formik.touched.content &&(
                                    <span className='text-red-500'>{formik.errors.content}</span>
                                )}
                            </div>
                            <div>
                                {/* <div>
                                <img src='' alt=''></img>
                            </div> */}
                                <div className='flex justify-between items-center mt-5'>
                                    <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon className='text-[#1d9bf0]' />
                                        <input type='file' name='imageFile' className='hidden' onChange={handelSelectImage} />
                                    </label>
                                    <FmdGoodIcon className='text-[#1d9bf0]'/>
                                    <TagFacesIcon className='text-[#1d9bf0]'/>
                                    </div>
                                    <div>
                                        <Button
                                        sx={{ width: "100%", borderRadius: "20px", paddingX: "20px", paddingY: "8px", bgcolor: "#1e88e5" }}
                                        variant='contained'
                                        type="submit"
                                        >
                                            Tweet
                                        </Button>
                                    </div>
                                </div>
                                
                            </div>
                        </form>

                    </div>
                </div>
            </section>
            <section>
                {[1,1,1,1,1].map((item) => <TweetCard />)}
            </section>
        </div>
    )
}

export default HomeSection