export const GET_BIO = `
query sectionEntryQuery {
  section(id: "2NseeVtQvdJz8TRihXQWef") {
    sys {
      id
    }
    name
    content {
      json
    }
    photo {
      url
    }
  }
}
`

export const GET_RATES = `
query ratesCollectionQuery {
  ratesCollection {
    items {
      hourly
      type
    }
  }
}
`
export const GET_CLASS_DESCRIPTION = `
query sectionEntryQuery {
  section(id: "4SVwxJI3CYzPOlES65hj3Y") {
    sys {
      id
    }
    name
    content {
      json
    }
    photo {
      url
    }
    # add the fields you want to query
  }
}
`

export const GET_DRUM_SAMPLE = `
query musicEntryQuery {
  music(id: "7mnA42heqVKhd2QGIWHoQS") {
    sys {
      id
    }
    title
    audio {
      url
    }
    photo {
      url
    }
  }
}
`

export const GET_ALL_MUSIC = `
query musicCollectionQuery {
  musicCollection {
    items {
      title
      audio {
        url
      }
      photo {
        url
      }
    }
  }
}
`

export const GET_HERO = `
query heroEntryQuery {
  hero(id: "2k3CPkJ8qjw7CDp9OPtu1p") {
    sys {
      id
    }
    title
    photo {
      url
    }
  }
}
`

export const GET_CONTACT = `
query linkCollectionQuery {
  linkCollection {
    items {
    url
      text
      
    }
  }
}
`
