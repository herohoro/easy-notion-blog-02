import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og';
import { NEXT_PUBLIC_SITE_TITLE } from '../../app/server-constants'
import { Post } from '../../lib/notion/interfaces'
import localFont from 'next/font/local'

export const config = { runtime: 'edge' }

const fontData = localFont({
  src: 'assets/NotoSansJP-Medium.woff',
  style: 'normal',
  display: 'swap',
})

const logoN =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path d="M43.551,10.962c0.936,1.425 0.421,4.743 0.402,7.552c-0.043,6.548 0.098,13.443 0.055,19.991c-0.009,1.319 -0.074,2.782 -1.001,3.721c-0.862,0.872 -2.199,1.012 -3.422,1.101c-7.977,0.583 -16.057,1.212 -24.048,1.632c-1.418,0.075 -2.825,-0.415 -3.972,-1.254c-1.147,-0.839 -2.22,-1.831 -2.977,-3.032c-1.578,-2.505 -3.454,-4.179 -4.119,-6.755c-0.361,-1.4 -0.382,-2.861 -0.4,-4.307c-0.081,-6.386 -0.162,-12.771 -0.242,-19.157c-0.017,-1.371 -0.018,-2.816 0.648,-4.017c0.666,-1.201 2.098,-1.035 3.452,-1.369c5.92,-0.655 12.246,-1.235 18.166,-1.889c2.096,-0.232 4.254,-0.459 6.286,0.109c4.245,1.188 9.694,5.426 11.172,7.674z" fill="#787777" fill-rule="evenodd" stroke="none" stroke-linejoin="miter"></path><path d="M9.955,10.381c1.348,0.668 2.926,0.611 4.428,0.539l23.471,-1.129c0.317,-0.015 0.471,-0.38 0.276,-0.63c-1.292,-1.658 -3.159,-2.865 -5.206,-3.345c-1.865,-0.437 -3.812,-0.287 -5.722,-0.134c-3.289,0.264 -6.578,0.527 -9.867,0.791c-1.628,0.131 -3.255,0.261 -4.883,0.392c-0.822,0.066 -1.645,0.132 -2.467,0.198c-0.42,0.034 -0.839,0.065 -1.259,0.101c-0.258,0.022 -0.558,0.044 -0.776,0.204c-0.534,0.392 0.114,1.255 0.385,1.63c0.42,0.581 0.977,1.064 1.62,1.383z" fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-linejoin="miter"></path><path d="M16.371,13.878c7.396,-0.48 14.793,-0.96 22.189,-1.44c0.725,-0.047 1.532,-0.068 2.081,0.407c0.617,0.533 0.653,1.46 0.642,2.275c-0.105,7.54 -0.21,14.599 -0.316,22.139c-0.013,0.903 -0.08,1.927 -0.776,2.502c-0.752,0.622 -1.846,0.701 -2.821,0.75c-3.697,0.186 -7.262,0.081 -10.886,0.456c-4.022,0.416 -7.561,0.642 -11.596,0.387c-0.858,-0.054 -1.779,-0.148 -2.433,-0.706c-0.942,-0.804 -0.669,-2.185 -0.624,-3.422c0.067,-1.835 -0.202,-3.861 -0.135,-5.697c0.067,-1.835 0.136,-3.726 0.202,-5.562c0.067,-1.835 -0.067,-3.659 0,-5.494c0.034,-0.926 -0.22,-1.801 -0.186,-2.727c0.017,-0.455 0.033,-0.909 0.05,-1.364c0.014,-0.375 -0.052,-0.86 0.071,-1.219c0.17,-0.496 1.126,-0.732 1.563,-0.862c0.772,-0.23 1.578,-0.32 2.379,-0.381c0.199,-0.016 0.398,-0.029 0.596,-0.042z" fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-linejoin="miter"></path><path d="M43.551,10.962c0.936,1.425 0.421,4.743 0.402,7.552c-0.043,6.548 0.098,13.443 0.055,19.991c-0.009,1.319 -0.074,2.782 -1.001,3.721c-0.862,0.872 -2.199,1.012 -3.422,1.101c-7.977,0.583 -16.057,1.212 -24.048,1.632c-1.418,0.075 -2.825,-0.415 -3.972,-1.254c-1.147,-0.839 -2.22,-1.831 -2.977,-3.032c-1.578,-2.505 -3.454,-4.179 -4.119,-6.755c-0.361,-1.4 -0.382,-2.861 -0.4,-4.307c-0.081,-6.386 -0.162,-12.771 -0.242,-19.157c-0.017,-1.371 -0.018,-2.816 0.648,-4.017c0.666,-1.201 2.098,-1.035 3.452,-1.369c5.92,-0.655 12.246,-1.235 18.166,-1.889c2.096,-0.232 4.254,-0.459 6.286,0.109c4.245,1.188 9.694,5.426 11.172,7.674z" fill="none" fill-rule="nonzero" stroke-opacity="0" stroke="#010101" stroke-linejoin="miter"></path><path d="M9.955,10.381c1.348,0.668 2.926,0.611 4.428,0.539l23.471,-1.129c0.317,-0.015 0.471,-0.38 0.276,-0.63c-1.292,-1.658 -3.159,-2.865 -5.206,-3.345c-1.865,-0.437 -3.812,-0.287 -5.722,-0.134c-3.289,0.264 -6.578,0.527 -9.867,0.791c-1.628,0.131 -3.255,0.261 -4.883,0.392c-0.822,0.066 -1.645,0.132 -2.467,0.198c-0.42,0.034 -0.839,0.065 -1.259,0.101c-0.258,0.022 -0.558,0.044 -0.776,0.204c-0.534,0.392 0.114,1.255 0.385,1.63c0.42,0.581 0.977,1.064 1.62,1.383z" fill="none" fill-rule="nonzero" stroke-opacity="0" stroke="#010101" stroke-linejoin="miter"></path><path d="M16.371,13.878c7.396,-0.48 14.793,-0.96 22.189,-1.44c0.725,-0.047 1.532,-0.068 2.081,0.407c0.617,0.533 0.653,1.46 0.642,2.275c-0.105,7.54 -0.21,14.599 -0.316,22.139c-0.013,0.903 -0.08,1.927 -0.776,2.502c-0.752,0.622 -1.846,0.701 -2.821,0.75c-3.697,0.186 -7.262,0.081 -10.886,0.456c-4.022,0.416 -7.561,0.642 -11.596,0.387c-0.858,-0.054 -1.779,-0.148 -2.433,-0.706c-0.942,-0.804 -0.669,-2.185 -0.624,-3.422c0.067,-1.835 -0.202,-3.861 -0.135,-5.697c0.067,-1.835 0.136,-3.726 0.202,-5.562c0.067,-1.835 -0.067,-3.659 0,-5.494c0.034,-0.926 -0.22,-1.801 -0.186,-2.727c0.017,-0.455 0.033,-0.909 0.05,-1.364c0.014,-0.375 -0.052,-0.86 0.071,-1.219c0.17,-0.496 1.126,-0.732 1.563,-0.862c0.772,-0.23 1.578,-0.32 2.379,-0.381c0.199,-0.016 0.398,-0.029 0.596,-0.042z" fill="none" fill-rule="nonzero" stroke-opacity="0" stroke="#010101" stroke-linejoin="miter"></path><path d="M35.148,18.821c0.019,4.927 0.038,9.854 0.057,14.781c0.004,0.959 0.254,1.956 -0.22,2.789c-0.466,0.819 -1.473,1.238 -2.413,1.164c-0.94,-0.074 -1.805,-0.576 -2.486,-1.228c-0.681,-0.652 -1.201,-1.45 -1.708,-2.245c-2.271,-3.552 -4.511,-7.12 -6.545,-10.813c-0.031,3.828 -0.062,7.657 -0.093,11.485c-0.002,0.285 0.004,0.597 0.186,0.817c0.199,0.24 0.546,0.293 0.858,0.28c0.312,-0.013 0.63,-0.072 0.932,0.009c0.138,0.037 0.272,0.107 0.364,0.217c0.25,0.299 0.095,0.787 -0.216,1.021c-0.312,0.234 -0.72,0.282 -1.108,0.322c-1.713,0.176 -3.426,0.352 -5.138,0.529c-0.195,0.02 -0.399,0.039 -0.578,-0.041c-0.332,-0.147 -0.442,-0.606 -0.284,-0.933c0.158,-0.327 0.515,-0.52 0.873,-0.577c0.358,-0.057 0.809,-0.213 1.167,-0.154c0.017,-4.954 0.035,-9.909 0.052,-14.863c0.001,-0.284 -0.002,-0.584 -0.148,-0.827c-0.17,-0.284 -0.508,-0.433 -0.838,-0.459c-0.33,-0.026 -0.658,0.053 -0.98,0.131c-0.311,-0.243 -0.333,-0.743 -0.17,-1.103c0.163,-0.36 0.508,-0.61 0.879,-0.744c0.371,-0.134 0.769,-0.168 1.162,-0.2c1.835,-0.15 3.67,-0.3 5.505,-0.451c2.29,4.49 5.088,8.758 8.163,12.752c-0.058,-3.775 -0.079,-7.48 -0.138,-11.256c-0.707,-0.104 -1.373,-0.235 -2.081,-0.339c-0.045,-0.546 0.226,-0.984 0.716,-1.229c0.49,-0.245 1.054,-0.287 1.601,-0.324c1.378,-0.093 2.755,-0.187 4.133,-0.28c0.188,-0.013 0.4,-0.017 0.535,0.114c0.208,0.201 0.082,0.557 -0.099,0.782c-0.442,0.548 -1.237,0.914 -1.94,0.873z" fill="#787777" fill-rule="evenodd" stroke="none" stroke-linejoin="miter"></path><path d="M35.148,18.821c0.019,4.927 0.038,9.854 0.057,14.781c0.004,0.959 0.254,1.956 -0.22,2.789c-0.466,0.819 -1.473,1.238 -2.413,1.164c-0.94,-0.074 -1.805,-0.576 -2.486,-1.228c-0.681,-0.652 -1.201,-1.45 -1.708,-2.245c-2.271,-3.552 -4.511,-7.12 -6.545,-10.813c-0.031,3.828 -0.062,7.657 -0.093,11.485c-0.002,0.285 0.004,0.597 0.186,0.817c0.199,0.24 0.546,0.293 0.858,0.28c0.312,-0.013 0.63,-0.072 0.932,0.009c0.138,0.037 0.272,0.107 0.364,0.217c0.25,0.299 0.095,0.787 -0.216,1.021c-0.312,0.234 -0.72,0.282 -1.108,0.322c-1.713,0.176 -3.426,0.352 -5.138,0.529c-0.195,0.02 -0.399,0.039 -0.578,-0.041c-0.332,-0.147 -0.442,-0.606 -0.284,-0.933c0.158,-0.327 0.515,-0.52 0.873,-0.577c0.358,-0.057 0.809,-0.213 1.167,-0.154c0.017,-4.954 0.035,-9.909 0.052,-14.863c0.001,-0.284 -0.002,-0.584 -0.148,-0.827c-0.17,-0.284 -0.508,-0.433 -0.838,-0.459c-0.33,-0.026 -0.658,0.053 -0.98,0.131c-0.311,-0.243 -0.333,-0.743 -0.17,-1.103c0.163,-0.36 0.508,-0.61 0.879,-0.744c0.371,-0.134 0.769,-0.168 1.162,-0.2c1.835,-0.15 3.67,-0.3 5.505,-0.451c2.29,4.49 5.088,8.758 8.163,12.752c-0.058,-3.775 -0.079,-7.48 -0.138,-11.256c-0.707,-0.104 -1.373,-0.235 -2.081,-0.339c-0.045,-0.546 0.226,-0.984 0.716,-1.229c0.49,-0.245 1.054,-0.287 1.601,-0.324c1.378,-0.093 2.755,-0.187 4.133,-0.28c0.188,-0.013 0.4,-0.017 0.535,0.114c0.208,0.201 0.082,0.557 -0.099,0.782c-0.442,0.548 -1.237,0.914 -1.94,0.873z" fill="none" fill-rule="nonzero" stroke-opacity="0" stroke="#010101" stroke-linejoin="round"></path></svg>'

const ApiOgImage = async function (req: NextRequest) {
  if (req.method !== 'GET') {
    throw new Error(`GET method only allowed. method: ${req.method}`)
  }

  const { searchParams } = new URL(req.url)

  if (!searchParams.has('slug')) {
    throw new Error('No slug in searchParams.')
  }

  const slug = searchParams.get('slug')

  const post: Post = await (
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${slug}`)
  ).json()
  if (!post) {
    throw new Error(`post not found. slug: ${slug}`)
  }

  if (post.OGImage) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            backgroundColor: '#faf5ec',
            backgroundSize: '100% 100%',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={post.OGImage}
            alt="og-image"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          backgroundColor: '#ADD6FF',
          backgroundSize: '100% 100%',
          width: '1200px',
          height: '630px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: '#faf5ec',
            backgroundSize: '100% 100%',
            width: '1140px',
            height: '570px',
            margin: 'auto',
            borderRadius: '28px',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '1040px',
              height: '490px',
              margin: 'auto',
              fontSize: '78px',
              textAlign: 'left',
              lineHeight: '130%',
              overflow: 'hidden',
              justifyContent: 'center',
              flexDirection: 'column',
              flexWrap: 'nowrap',
            }}
            className={fontData.className}
          >
            {post.Title}
          </div>
          <div
            style={{
              display: 'flex',
              width: '1040px',
              height: '100px',
              margin: 'auto',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '640px',
                height: '64px',
                margin: 'auto',
                fontSize: '42px',
                color: '#555',
                overflow: 'hidden',
              }}
            >
              ✏️ {NEXT_PUBLIC_SITE_TITLE}
            </div>
            <div
              style={{
                display: 'flex',
                width: '400px',
                height: '64px',
                margin: 'auto',
                paddingLeft: '130px',
                fontSize: '42px',
                color: '#787777',
              }}
            >
              easy
              <img
                src={`data:image/svg+xml,${encodeURIComponent(logoN)}`}
                width={72}
                height={72}
                alt="logo"
              />
              blog
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

export default ApiOgImage
