import React, { useState } from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReplyModal from './ReplyModal';

const TweetCard = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [openReplyModal, setOpenReplyModal] = useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDeleteTweets = () => {
        console.log("delete tweet")
        handleClose();
    }

    const handleCreateRetweets = () => {
        console.log("create retweet")
    }

    const handleLiketweets = () => {
        console.log("like tweets")
    }

    return (
        <React.Fragment>

            {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>
        </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate("/profile/${6}")}
                    className='cursor-pointer'
                    alt='username'
                    src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
                />
                <div className='w-full'>
                    <div className="flex justify-between items-center">
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'>Shepherd</span>
                            <span className='text-gray-600'>@shepherd_han .2m</span>
                            <VerifiedIcon fontSize='small' sx={{ color: "#1e88e5" }} />
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweets}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweets}>Edit</MenuItem>
                            </Menu>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <div onClick={() => navigate('/twit/${3}')} className='cursor-pointer'>
                            <p className='mb-2 p-0'>This is a twitter  full stack clone with react and spring boot.</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src='https://fullscale.io/wp-content/uploads/2022/04/spring-boot-and-react-js.png'></img>
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center ${true?"text-pink-600:text-gray-600}'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>453</p>
                            </div>
                            <div className={'text-gray-600 space-x-3 flex items-center '}>

                                <RepeatIcon
                                    onClick={handleCreateRetweets}
                                    className='curser-pointer'
                                />
                                <p>2</p>

                            </div>
                            <div className={' space-x-3 flex items-center '}>

                                {true ? <FavoriteIcon
                                    onClick={handleLiketweets}
                                    className='curser-pointer text-pink-600'
                                /> : <FavoriteBorderIcon
                                    onClick={handleLiketweets}
                                    className='curser-pointer text-grey-600'
                                />}
                                <p>2</p>

                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                                <p>4503</p>
                            </div>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModal} />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <section>
                <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal}/>
            </section>

        </React.Fragment>
    )
}

export default TweetCard