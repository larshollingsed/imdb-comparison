module SearchHelper
  def self.imdb_to_hash(imdb_array)
    hash = {}
    imdb_array.each do |item|
      item_array = item.split(" => ")
      hash[item_array[0]] = item_array[1]
    end
    hash
  end
end
